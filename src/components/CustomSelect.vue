<template>
  <div include="form-input-select()">
    <select>
      <option v-for="option in options" :value="option">{{option}}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'CustomSelect',
  props: {
    options: Array,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@mixin _select-form-reset() {
  display: block;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    pointer-events: none; // Arrow clickable in some browsers
    z-index: 2;
  } // This is the native select, we're making everything but the text invisible so we can see the button styles in the wrapper
  select {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    border: 1px solid transparent;
    font-size: 16px; // Font size must the 16px or larger to prevent iOS page zoom on focus
    outline: none;

    /* Focus style */
    &:focus {
      background-color: transparent;
      outline: none;
    }
  }

  /* Set options to normal weight */
  option {
    font-weight: normal;
  }

  /* ------------------------------------  */
  /* START OF UGLY BROWSER-SPECIFIC HACKS */
  /* ----------------------------------  */
  // Targeted via this hack http://browserhacks.com/#hack-a3f166304aafed524566bc6814e1d5c7
  x:-o-prefocus,
  &::after {
    display: none;
  } // IE 10/11+ - This hides native dropdown button arrow so it will have the custom appearance,
  // IE 9 and earlier get a native select - targeting media query hack via http://browserhacks.com/#hack-28f493d247a12ab654f6c3637f6978d5 - looking for better ways to achieve this targeting
  // The second rule removes the odd blue bg color behind the text in the select button in IE 10/11 and sets the text color to match the focus style's - fix via http://stackoverflow.com/questions/17553300/change-ie-background-color-on-unopened-focused-select-box */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    & {
      select {
        &::-ms-expand {
          display: none;
        }

        &:focus::-ms-value {
          background: transparent;
          color: #000;
        }
      }
    }
  }

  /* FIREFOX won't let us hide the native select arrow, so we have to make it wider than needed and clip it via overflow on the parent container.
     The percentage width is a fallback since FF 4+ supports calc() so we can just add a fixed amount of extra width to push the native arrow out of view. We're applying this hack across all FF versions because all the previous hacks were too fragile and complex.
     You might want to consider not using this hack and using the native select arrow in FF. Note this makes the menus wider than the select button because they display at the specified width and aren't clipped. Targeting hack via http://browserhacks.com/#hack-758bff81c5c32351b02e10480b5ed48e */
  /* Show only the native arrow */
  @-moz-document url-prefix() {
    & {
      overflow: hidden;

      select {
        width: 120%;
        width: -moz-calc(100% + 3em);
        width: calc(100% + 3em);

        @supports (-moz-appearance: none) {
          width: 100%;
        }

        /* Firefox focus has odd artifacts around the text, this kills that. See https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-focusring */
        &:-moz-focusring {
          color: transparent;
          text-shadow: 0 0 0 #000;
        }
      }
    }
  }

  @supports (-moz-appearance: none) {
    & {
      width: 100%;
    }
  }
}

// SELECT
// Demo Colors
$demo-blue: #005ba6;
$demo-gray: #d6d6d6;
$demo-placeholder: #c7c7c7;
$demo-border: #e6e6e6;

$border-width: 1px;

// Select function
@mixin form-input-select() {
  @include _select-form-reset;
  color: var(--mm);
  display: block;
  border-radius: 0;
  box-shadow: none;
  font-size: 1em;
  width: 100%;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    pointer-events: none; // Arrow clickable in some browsers
    // triangle set up
    border: 1px solid transparent; // reset all borders
    width: 0;
    height: 0;
    right: 0%;
  } // bottom arrow
  &::after {
    border-width: 6px 4.5px 0 4.5px;
    border-top-color: var(--mm);
    top: -20%;
  } // firefox is outside the div
  @-moz-document url-prefix() {
    border-right: $border-width solid $demo-border;

    &:hover {
      border-right: $border-width solid $demo-blue;
    }
  }

  &:hover {
    select {
      border: solid 2px var(--mm); // outline is critical but when we are hovering the div has the border already.
      &:focus {
        outline-color: black;
      }
    }

    &::before {
      border-bottom-color: var(--mm);
    }
    &::after {
      border-top-color: var(--mm);
    }
  } // Make sure you set all padding, borders on this select and not the parent div.
  // this is mainly for :focus and tabbing.
  select {
    border: solid 2px transparent;
    border-radius: 0;
    font-weight: 400;
    color: inherit;
    padding: 5px 5px 0;
    margin-bottom: 5px;
    line-height: normal;
    transition: border-color 0.2s ease, outline 0.2s ease; // we really need this for the tabbers
    // causes double borders though

    &[disabled],
    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    } // we use invalid like a placeholder
    &:invalid {
      color: $demo-placeholder;
    }
  }
}

// Show the function
[include*='form-input-select()'] {
  @include form-input-select();
}

@mixin _select-form-reset() {
  display: block;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    pointer-events: none; // Arrow clickable in some browsers
    z-index: 2;
  } // This is the native select, we're making everything but the text invisible so we can see the button styles in the wrapper
  select {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    border: 1px solid transparent;
    font-size: 1rem; // Font size must the 16px or larger to prevent iOS page zoom on focus
    outline: none;

    /* Focus style */
    &:focus {
      background-color: transparent;
      outline: none;
    }
  }

  /* Set options to normal weight */
  option {
    font-weight: normal;
  }

  /* ------------------------------------  */
  /* START OF UGLY BROWSER-SPECIFIC HACKS */
  /* ----------------------------------  */
  // Targeted via this hack http://browserhacks.com/#hack-a3f166304aafed524566bc6814e1d5c7
  x:-o-prefocus,
  &::after {
    display: none;
  } // IE 10/11+ - This hides native dropdown button arrow so it will have the custom appearance,
  // IE 9 and earlier get a native select - targeting media query hack via http://browserhacks.com/#hack-28f493d247a12ab654f6c3637f6978d5 - looking for better ways to achieve this targeting
  // The second rule removes the odd blue bg color behind the text in the select button in IE 10/11 and sets the text color to match the focus style's - fix via http://stackoverflow.com/questions/17553300/change-ie-background-color-on-unopened-focused-select-box */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    & {
      select {
        &::-ms-expand {
          display: none;
        }

        &:focus::-ms-value {
          background: transparent;
          color: #000;
        }
      }
    }
  }

  /* FIREFOX won't let us hide the native select arrow, so we have to make it wider than needed and clip it via overflow on the parent container.
     The percentage width is a fallback since FF 4+ supports calc() so we can just add a fixed amount of extra width to push the native arrow out of view. We're applying this hack across all FF versions because all the previous hacks were too fragile and complex.
     You might want to consider not using this hack and using the native select arrow in FF. Note this makes the menus wider than the select button because they display at the specified width and aren't clipped. Targeting hack via http://browserhacks.com/#hack-758bff81c5c32351b02e10480b5ed48e */
  /* Show only the native arrow */
  @-moz-document url-prefix() {
    & {
      overflow: hidden;

      select {
        width: 120%;
        width: -moz-calc(100% + 3em);
        width: calc(100% + 3em);

        @supports (-moz-appearance: none) {
          width: 100%;
        }

        /* Firefox focus has odd artifacts around the text, this kills that. See https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-focusring */
        &:-moz-focusring {
          color: transparent;
          text-shadow: 0 0 0 #000;
        }
      }
    }
  }

  @supports (-moz-appearance: none) {
    & {
      width: 100%;
    }
  }
}
</style>
