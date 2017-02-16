import Ember from "ember";
const names = ['Stefan', 'Miguel', 'Tomster', 'Pluto'];
export default Ember.Controller.extend({
  names: names,
  calendarRange:[-3000,0],
  value: names[1],
  actions: {
    foo(city){
      this.set('value', city);
    }
  }
});
