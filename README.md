# Drops

> *Drops* is a collective performance based on the [*Soundworks*](https://github.com/collective-soundworks/soundworks/) framework.

The application is strongly inspired by the mobile application *Bloom* by Brian Eno and and Peter Chilvers. *Drops* reproduces several audiovisual elements of the *Bloom* application while transposing them into a collaborative experience.

Each *player* can play sounds of different pitch and timbre depending on the touch position. As in *Bloom*, each sound is visualized by a circle growing from the tapping position and fading with the sound. However, in *Drops* the sounds played by one player are sequentially repeated two other players in a period of a few seconds before coming back to the original player. The sounds are repeated in a fading loop until they vanish. Players can clear the loop by shaking their smartphones.

The parameters of the application (i.e. the period of the echoes, the number of echo players, the echo attenuation, etc) can be controlled via a *controller* client with a basic authentication accessible at the url `http://127.0.0.1:8000/controller/` (password: "password").

```sh
# to start the application
git clone https://github.com/ircam-cosima/drops.git
cd soundworks-drops
npm install
npm run transpile
npm run start
```

You can refer to the [*Soundworks Template*](https://github.com/collective-soundworks/soundworks-template/) repository to learn more about the structure of this project.


RangeError: Invalid array length
    at Bot.triggerDropMessage (/var/www/node/drops/dist/server/PlayerExperience.js:139:11)
    at Bot._trigger (/var/www/node/drops/dist/server/bots.js:68:10)
    at ontimeout (timers.js:380:14)
    at tryOnTimeout (timers.js:244:5)
    at Timer.listOnTimeout (timers.js:214:5)
RangeError: Invalid array length
    at Bot.triggerDropMessage (/var/www/node/drops/dist/server/PlayerExperience.js:139:11)
    at Bot._trigger (/var/www/node/drops/dist/server/bots.js:68:10)
    at ontimeout (timers.js:380:14)
    at tryOnTimeout (timers.js:244:5)
    at Timer.listOnTimeout (timers.js:214:5)
