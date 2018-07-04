<template>
  <section class="container">
    <div class="range-calendar" style="display: block">
      <div class="wrapper">
        <div class="months ui-draggable" style="left: 0px;">
          <div v-for="month in toAppend.months" class="month-cell cell">
            <div class="date-formatted">
              <span class="month-name">{{MONTHS[month.monthNumber] | abr}}</span> {{month.fullYear%1000}}
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="calendar ui-draggable" :style="{pointerEvents: eventState.phase === 'dragging' ? 'none' : 'auto'}" style="left: 0px;" @mousedown="handleDrag($event)">
          <div v-for="day in toAppend.days" class="cal-cell cell" :id="`${day.fullYear}-${day.monthNumber}-${day.day}`" :month-id="`${day.fullYear}-${day.monthNumber}`" :month="day.monthNumber" @click="toggleSelect($event, day)">
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
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'DateStep',
  filters: {
    abr: value => {
      if (!value) return '';
      return `${value.slice(0, 3).toUpperCase()}`;
    },
  },
  computed: {},
  data() {
    return {
      TODAY: new Date(),
      NUMBER_OF_DAYS: 365,
      NUMBER_OF_MONTH: 12,
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
      currentConstructorDate: new Date(),
      currentConstructorMonth: new Date(),
      currentConstructorYear: new Date(),
      toAppend: {
        months: [],
        years: [],
        days: [],
      },
      eventState: {
        phase: 'sleep',
        startX: 0,
        currentOffset: 0,
        initLeft: 0,
      },
    };
  },
  methods: {
    handleDrag(e) {
      if (e.type === 'mouseup' || e.type === 'mouseleave') {
        document.body.removeEventListener('mousemove', this.handleDrag, false);
        this.eventState.phase = 'sleep';
      }
      if (e.type === 'mousedown' && e.button === 0) {
        document.body.addEventListener('mousemove', this.handleDrag, false);
        this.eventState.phase = 'listen';
        this.eventState.startX = e.screenX;
        this.eventState.style = e.path.find(el => el.className.includes('ui-draggable')).style;
        this.eventState.initLeft = Number(this.eventState.style.left.match(/-?[0-9]+/g)[0]);
      }
      if (e.type === 'mousemove') {
        this.eventState.phase = 'dragging';
        this.eventState.currentOffset = e.screenX - this.eventState.startX;
        this.eventState.realOffset = this.eventState.initLeft + this.eventState.currentOffset;
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
          day: this.gDay(this.currentConstructorMonth),
          monthNumber: this.gMonth(this.currentConstructorMonth),
          fullYear: this.gYear(this.currentConstructorMonth),
        };
        calendar.months.push({
          monthNumber: date.monthNumber,
          fullYear: date.fullYear,
        });
        this.currentConstructorMonth = new Date(date.fullYear, date.monthNumber + 1, date.day);
      }
      return calendar;
    },
    toggleSelect(e, day) {
      if (e.target.getAttribute('selected') == 'true') {
        e.target.setAttribute('selected', false);
        this.selectedDate = null;
        return;
      }
      if (this.selectedDate)
        document
          .getElementById(
            `${this.selectedDate.fullYear}-${this.selectedDate.monthNumber}-${
              this.selectedDate.day
            }`
          )
          .setAttribute('selected', false);
      this.selectedDate = day;
      e.target.setAttribute('selected', true);
      this.dateSelected(day);
    },
    dateSelected(date) {
      const formattedDate = new Date(
        Date.UTC(date.fullYear, date.monthNumber, date.day)
      ).toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      this.$emit('dateSelected', formattedDate);
    },
  },
  created() {
    this.toAppend = this.buildCalendar();
    document.body.onmouseup = e => this.handleDrag(e);
    document.body.onmouseleave = e => this.handleDrag(e);
  },
};
</script>
<style lang="scss" scoped>
/* ========================================================================== */

/* ========================================================================== */

.container {
  margin-top: 0;
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
  padding: 10px 0;
  background-color: transparent;
}

.cell-content {
  pointer-events: none;
}

.cal-cell[selected='true'] {
  background-color: var(--mm);
}
.cal-cell[selected='true'] {
  border-radius: 0.5em;
  .cell-content {
    transform: scale(1.5);
    transition: transform 0.3s ease;
    div {
      color: white;
    }
  }
}

.range-calendar.triggerable {
  display: none;
}

.calendar-wrapper {
  position: relative;
  left: 0;
  top: 0;
  z-index: 2;
  list-style: none;
  display: block;
  clear: both;
  overflow: hidden;
  padding: 10px 0;
}

.range-calendar .calendar {
  z-index: 1;
  list-style: none;
  float: left;
  margin: 0;
  padding: 0;
  position: relative;
  width: 99999px;
}

.range-calendar .calendar .cell {
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
  width: 99999px;
  border-bottom: 0px solid #f9f9f9;
  margin-bottom: 10px;
}

.range-calendar.auto-hide-months .months {
  display: none;
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
  font-weight: 100;
  font-size: 12px;
}

.range-calendar .months .cell .bullet {
  position: absolute;
  left: 15px;
  top: 15px;
  height: 7px;
  width: 7px;
  background-color: #888;
  display: none;
  border-radius: 1px;
}

.range-calendar .months .cell.current .bullet {
  display: block;
}

.range-calendar .ui-draggable {
  cursor: move;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.range-calendar .ui-draggable-dragging {
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
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

.calendar .cell {
  color: rgba(0, 0, 0, 0.4);
}

.calendar .cell .day-number {
  color: #888;
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
