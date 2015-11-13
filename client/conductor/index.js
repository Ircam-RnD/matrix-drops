'use strict';

var clientSide = require('soundworks/client');
var client = clientSide.client;
var inputModule = clientSide.inputModule;
var Control = clientSide.Control;

client.init('conductor');

window.addEventListener('load', function () {
  var control = new Control({
    gui: true
  });
  client.start(control);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvY29uZHVjdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM5QyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQy9CLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7QUFDekMsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7QUFFakMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFekIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFNO0FBQ3BDLE1BQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDO0FBQ3hCLE9BQUcsRUFBRSxJQUFJO0dBQ1YsQ0FBQyxDQUFDO0FBQ0gsUUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUN2QixDQUFDLENBQUMiLCJmaWxlIjoic3JjL2NsaWVudC9jb25kdWN0b3IvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBjbGllbnRTaWRlID0gcmVxdWlyZSgnc291bmR3b3Jrcy9jbGllbnQnKTtcbnZhciBjbGllbnQgPSBjbGllbnRTaWRlLmNsaWVudDtcbnZhciBpbnB1dE1vZHVsZSA9IGNsaWVudFNpZGUuaW5wdXRNb2R1bGU7XG52YXIgQ29udHJvbCA9IGNsaWVudFNpZGUuQ29udHJvbDtcblxuY2xpZW50LmluaXQoJ2NvbmR1Y3RvcicpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgdmFyIGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7XG4gICAgZ3VpOiB0cnVlXG4gIH0pO1xuICBjbGllbnQuc3RhcnQoY29udHJvbCk7XG59KTsiXX0=