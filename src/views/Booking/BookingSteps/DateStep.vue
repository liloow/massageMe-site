<template>
  <section class="container">
    <div class="range-calendar" :style="eventState.phase === 'dragging' ? {pointerEvents: 'none', transition: 'none', cursor:'-webkit-grab'} : {} " style="display: block background-color: 'transparent'">
      <div class="wrapper">
        <div id="monthly" class="months ui-draggable" style="left: 0px;" @mousedown="handleDrag($event)" @touchstart="handleDrag($event)">
          <div v-for="month in toAppend.months" class="month-cell cell" :class="month.past ? 'past' : ''" @click="toggleSelectMonth($event, month)" :month-id="`${month.fullYear}-${month.monthNumber}`">
            <div class="date-formatted">
              <span class="cell-content month-name">{{MONTHS[month.monthNumber] | abr}}</span> {{month.fullYear%1000}}
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div id="daily" class="calendar ui-draggable" :style="eventState.phase === 'dragging' ? {pointerEvents: 'none', transition: 'none'} : {} " style="left: 0px;" @mousedown="handleDrag($event)" @touchstart="handleDrag($event)">
          <div v-for="day in toAppend.days" class="cal-cell cell" :id="`${day.fullYear}-${day.monthNumber}-${day.day}`" :month="day.monthNumber" :year="day.fullYear" @click="toggleSelect($event, day)">
            <div class="cell-content">
              <div class="day-number">
                {{day.day}}
              </div>
              <div class="day">
                {{DAYS[day.dayOfTheWeek] | abr}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow left" @click="goLeft($event)" :disabled="eventState.realOffset === 0" :style="{visibility: eventState.realOffset === 0 ? 'hidden' : 'visible'}">
        <i class="material-icons">keyboard_arrow_left</i>
      </div>
      <div class="arrow right" @click="goRight($event)">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  </section>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'DateStep',
  filters: {
    abr: value => {
      if (!value) return '';
      return `${value.slice(0, 3).toUpperCase()}`;
    },
  },
  computed: {
    ...mapGetters({
      steps: 'getSteps',
    }),
    currentMonth() {
      let past = this.eventState.pastBreakPoints;
      let future = this.eventState.monthBreakPoints;
      let off =
        Math.abs(this.eventState.realOffset) +
        document.querySelector('#monthly').parentNode.clientWidth / 2;
      if (past.length > 0 && off <= past[past.length - 1].offset) {
        future.unshift(past.pop());
        this.toggleSelectMonth(null, past[past.length - 1]);
        return past[past.length - 1];
      }
      if (future.length > 0 && off >= future[0].offset) {
        this.toggleSelectMonth(null, future[0]);
        past.push(future.shift());
        return past[past.length - 1];
      }
      return {
        offset: 0,
        monthNumber: this.TODAY.getMonth(),
        fullYear: this.TODAY.getFullYear(),
      };
    },
  },
  data() {
    return {
      TODAY: new Date(),
      NUMBER_OF_DAYS: 533,
      NUMBER_OF_MONTH: 18,
      PREPEND_MONTHS: 2,
      DAYS: ['DIMANCHE', 'LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'],
      MONTHS: [
        'JANVIER',
        'FÉVRIER',
        'MARS',
        'AVRIL',
        'MAI',
        'JUIN',
        'JUILLET',
        'AOÛT',
        'SEPTEMBRE',
        'OCTOBRE',
        'NOVEMBRE',
        'DÉCEMBRE',
      ],
      selectedDate: null,
      selectedMonth: null,
      currentConstructorDate: new Date(),
      currentConstructorMonth: new Date(),
      currentConstructorYear: new Date(),
      toAppend: {
        months: [],
        years: [],
        days: [],
      },
      eventState: {
        monthBreakPoints: [],
        pastBreakPoints: [
          {
            offset: 0,
            monthNumber: new Date().getMonth(),
            fullYear: new Date().getFullYear(),
          },
        ],
        phase: 'sleep',
        startX: 0,
        currentOffset: 0,
        initLeft: 0,
        maxOffset: 0,
        realOffset: 0,
      },
    };
  },
  methods: {
    goLeft(e) {
      if (this.eventState.realOffset === 0) return;
      let elem = e.target.previousSibling;
      this.eventState.realOffset =
        this.eventState.realOffset + Math.floor(elem.clientWidth / 111) * 111;
      if (this.eventState.realOffset > 0) this.eventState.realOffset = 0;
      document.querySelector('#daily').style.left = `${this.eventState.realOffset}px`;
      this.currentMonth;
    },
    goRight(e) {
      let elem = e.target.previousSibling.previousSibling;
      this.eventState.realOffset =
        this.eventState.realOffset - Math.floor(elem.clientWidth / 111) * 111;
      document.querySelector('#daily').style.left = `${this.eventState.realOffset}px`;
      this.currentMonth;
    },
    handleDrag(e) {
      if (e.type === 'mouseup' || e.type === 'mouseleave' || e.type === 'touchend') {
        document.body.removeEventListener('mousemove', this.handleDrag, false);
        document.body.removeEventListener('touchmove', this.handleDrag, false);
        this.eventState.phase = 'sleep';
        // this.currentMonth;
      }
      if ((e.type === 'mousedown' && e.button === 0) || e.type === 'touchstart') {
        document.body.addEventListener('mousemove', this.handleDrag, false);
        document.body.addEventListener('touchmove', this.handleDrag, false);
        this.eventState.phase = 'listen';
        this.eventState.startX = e.screenX || e.touches[0].screenX;
        let row = e.path.find(el => el.className.includes('ui-draggable'));
        this.eventState.style = row.style;
        this.eventState.maxOffset = row.parentNode.clientWidth - row.clientWidth;
        this.eventState.initLeft = Number(this.eventState.style.left.match(/-?[0-9]+/g)[0]);
      }
      if (e.type === 'mousemove' || e.type === 'touchmove') {
        this.eventState.phase = 'dragging';
        this.eventState.currentOffset =
          (e.screenX || e.touches[0].screenX) - this.eventState.startX;
        this.eventState.realOffset = this.eventState.initLeft + this.eventState.currentOffset;
        if (Math.abs(this.eventState.realOffset) > Math.abs(this.eventState.maxOffset)) {
          this.eventState.realOffset = this.eventState.maxOffset;
        }
        this.eventState.style.left =
          this.eventState.realOffset <= 0 ? `${this.eventState.realOffset}px` : '0px';
      }
    },
    gWeekDay: currentConstructorDate => currentConstructorDate.getDay(),
    gDay: currentConstructorDate => currentConstructorDate.getDate(),
    gMonth: currentConstructorDate => currentConstructorDate.getMonth(),
    gYear: currentConstructorDate => currentConstructorDate.getFullYear(),
    buildCalendar() {
      const calendar = {
        days: [],
        months: [],
        years: [],
      };
      for (let i = 0; i < this.NUMBER_OF_DAYS; i++) {
        let date = {
          dayOfTheWeek: this.gWeekDay(this.currentConstructorDate),
          day: this.gDay(this.currentConstructorDate),
          monthNumber: this.gMonth(this.currentConstructorDate),
          fullYear: this.gYear(this.currentConstructorDate),
        };
        calendar.days.push(date);
        this.currentConstructorDate = new Date(date.fullYear, date.monthNumber, date.day + 1);
      }
      for (let i = 0; i < this.NUMBER_OF_MONTH; i++) {
        let date = {
          day: i === 0 ? this.gDay(this.currentConstructorMonth) : 1,
          monthNumber: this.gMonth(this.currentConstructorMonth),
          fullYear: this.gYear(this.currentConstructorMonth),
        };
        calendar.months.push({
          monthNumber: date.monthNumber,
          fullYear: date.fullYear,
        });
        this.currentConstructorMonth = new Date(date.fullYear, date.monthNumber + 1, date.day);
      }
      for (let i = 0; i < this.PREPEND_MONTHS; i++) {
        let year = calendar.months[0].fullYear;
        let index = calendar.months[0].monthNumber - 1;
        if (index === -1) {
          index = 11;
          year--;
        }
        calendar.months = [{monthNumber: index, fullYear: year, past: true}, ...calendar.months];
      }
      return calendar;
    },
    toggleSelectMonth(e, month) {
      console.log(month.fullYear, month.monthNumber);
      let exist = document.querySelector('.month-cell[selected="true"]');
      if (exist) exist.setAttribute('selected', false);
      document
        .querySelector(`[month-id="${month.fullYear}-${month.monthNumber}"]`)
        .setAttribute('selected', true);
      this.selectedMonth = `${month.fullYear}-${month.monthNumber}`;
      const id = `[year="${month.fullYear}"][month="${month.monthNumber}"].cal-cell`;
      if (e) this.scrollIntoView(document.querySelector(id));
    },
    toggleSelect(e, day) {
      let exist = document.querySelector('.cal-cell[selected="true"]');
      if (exist) {
        exist.setAttribute('selected', false);
        if (e.target === exist) {
          this.selectedDate = null;
          this.selectedMonth = null;
          return this.$emit('dateCleared');
        }
      }
      this.selectedDate = day;
      this.selectedMonth = `${day.fullYear}-${day.monthNumber}`;
      this.toggleSelectMonth(null, day);
      e.target.setAttribute('selected', true);
      this.dateSelected(day);
    },
    scrollIntoView(element) {
      let cal = element;
      if (!element) cal = document.querySelector(`[selected=true].cal-cell`);
      let offset = cal.offsetLeft - cal.parentNode.parentNode.clientWidth * 0.3 - cal.clientWidth;
      this.eventState.realOffset = offset > 0 ? -offset : 0;
      document.querySelector('#daily').style.left = `${this.eventState.realOffset}px`;
    },
    dateSelected(date) {
      const raw = [date.fullYear, date.monthNumber, date.day];
      const formattedDate = new Date(
        Date.UTC(date.fullYear, date.monthNumber, date.day)
      ).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      this.$emit('dateSelected', {formattedDate, raw});
    },
  },
  created() {
    this.toAppend = this.buildCalendar();
    document.body.onmouseup = e => this.handleDrag(e);
    document.body.onmouseleave = e => this.handleDrag(e);
    document.body.ontouchend = e => this.handleDrag(e);
  },
  mounted() {
    if (!this.steps.date) {
      document.querySelector('div:not(.past).month-cell.cell').click(); //.setAttribute('selected', true);
    }
    if (this.steps.date) {
      const d = this.steps.date.raw;
      document.getElementById(`${d[0]}-${d[1]}-${d[2]}`).click();
    }
    if (this.selectedDate) {
      this.scrollIntoView();
    }
    this.eventState.monthBreakPoints = [...document.querySelectorAll('.cal-cell')]
      .filter(cell => /-1$/g.test(cell.id))
      .map(el => ({
        offset: el.offsetLeft,
        monthNumber: el.getAttribute('month'),
        fullYear: el.getAttribute('year'),
      }));
  },
};
</script>
<style lang="scss" scoped>
/* ========================================================================== */

/* ========================================================================== */

.container {
  margin-top: 1em;
  margin-bottom: 0;
}

.range-calendar {
  box-sizing: content-box;
  clear: both;
  overflow: hidden;
  width: 100%;
  position: relative;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0;
  background-color: transparent;
  .month-cell {
    padding: 0;
  }
  .arrow {
    position: absolute;
    display: flex;
    height: 94px;
    bottom: 0;
    align-items: center;
    z-index: 1000;
    transition: 0.2s all;
    &:hover {
      background-color: #f8f8ff;
      box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    i {
      font-size: 36px;
      pointer-events: none;
    }
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
    &:active {
      transform: scale(0.8);
    }
    &[disabled] {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}

.cell-content,
.date-formatted {
  pointer-events: none;
}

.cell.cal-cell[selected='true'] {
  background-color: var(--mm);
}

.range-calendar {
  .months .cell[selected='true'] .date-formatted {
    opacity: 0.5;
    color: white;
    background-color: var(--mm);
    border-radius: 0.5em;
    padding: 0.3em;
    margin-top: -0.3em;
    font-weight: 350;
  }
}

.cal-cell[selected='true'],
.month-cell[selected='true'] {
  border-radius: 0.5em;
  .cell-content {
    transition: transform 0.3s ease;
    div {
      transform: scale(1.5);
      color: white;
    }
  }
}

.range-calendar .calendar {
  z-index: 1;
  list-style: none;
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
  width: max-content;
  transition: all 1s ease;
  > .cell:first-child {
    color: red;
    .day-number {
      text-decoration: underline;
    }
  }
}

.range-calendar .cal-cell {
  float: left;
  width: 5em;
  padding: 25px 20px;
  margin: 0px;
  border-right: 1px solid rgba(0, 0, 0, 0.03);
  text-align: center;
  position: relative;
  color: #888;
}

.range-calendar .calendar .cell .day-number {
  display: block;
  clear: both;
  font-weight: bold;
  font-size: 20px;
  z-index: 1;
  position: relative;
}

.range-calendar .calendar .cell .day {
  display: block;
  clear: both;
  text-transform: uppercase;
  width: 100%;
  font-weight: 100;
  font-size: 12px;
  margin-top: 0px;
  z-index: 1;
  position: relative;
}

.range-calendar .calendar .cell .month {
  width: 100%;
  font-size: 12px;
  z-index: 1;
  text-transform: uppercase;
  position: absolute;
  opacity: 1;
  left: 0;
  top: 10px;
  font-weight: bold;
}

.range-calendar .calendar .cell .day.ferial {
  font-weight: bold;
}

.range-calendar .calendar .cell .month.first {
  opacity: 1;
}

.range-calendar .months {
  z-index: 1;
  list-style: none;
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
  width: max-content;
  border-bottom: 0px solid ghostwhite;
  margin-bottom: 10px;
}

.range-calendar .months .cell {
  float: left;
  width: 105px;
  padding: 10px 10px;
  margin: 0px 0;
  text-align: center;
  position: relative;
  color: #888;
  border-right: 1px solid rgba(0, 0, 0, 0.03);
  position: relative;
}

.range-calendar .months .cell .month-name {
  font-weight: bold;
  font-size: 12px;
  z-index: 1;
  position: relative;
  text-transform: uppercase;
}

.range-calendar .months .cell .date-formatted {
  font-weight: 200;
  font-size: 1em;
}

.range-calendar .months .cell.current .bullet {
  display: block;
}

.range-calendar .ui-draggable {
  cursor: move;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.months {
  background-color: transparent;
}

.months .cell {
  color: #888;
}

.calendar {
  background-color: transparent;
}

.range-calendar .months .cell.past {
  background-color: rgba(222, 222, 222, 0.6);
  color: lightgrey;
  opacity: 0.8;
  pointer-events: none;
  border-right: solid 0.5px rgba(222, 222, 222, 0.8);
}

@keyframes scroll-to-view {
  0% {
  }
  100% {
  }
}

@media only screen and (max-width: 768px) {
  .range-calendar .calendar .cell {
    width: 70px;
    padding: 20px 15px;
  }
  .range-calendar .calendar .cell .day-number {
    font-size: 15px;
  }
  .range-calendar .calendar .cell .day {
    font-size: 8px;
  }

  .range-calendar .months .cell {
    width: 85px;
    padding: 10px 10px;
  }
}
</style>
