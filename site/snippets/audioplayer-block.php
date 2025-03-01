<?php if ($block->type() == 'audioplayer'): ?>
<div x-data="audioPlayer()" x-init="init()" class="rounded-full border border-black w-fit overflow-hidden shadow relative p-1">
    <audio x-ref="audio" src="<?= $block->files()->toFile()->url() ?>"></audio>
    <div x-data="{ isPlaying: false }" class="flex relative overflow-hidden transition-all duration-300">

        <div class="flex items-center w-fit pl-2 z-50 rounded-full transition-colors duration-300">
            <div class='flex justify-between items-center transition-transform duration-300 ease-in-out'>
                <span><?= $block->audioname() ?></span>
                <span x-text="currentTime" class="text-sm ml-8 font-mono block leading-none m-1 "></span>
            </div>

            <button @click="isPlaying ? pause() : play(); isPlaying = !isPlaying"
                    class="rounded-full border border-black w-8 h-8 ml-4 bg-white">
              <div class="relative flex items-center justify-center w-full h-full overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 absolute transition-transform duration-300 ease-in-out"
                :class="playing ? '-translate-x-full' : 'translate-x-0'">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="w-6 h-6 absolute transition-transform duration-300 ease-in-out"
                  :class="playing ? 'translate-x-0' : 'translate-x-full'">
                <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
              </svg>
              </div>
            </button>
        </div>
    </div>
    <div class="absolute top-0 left-0 w-full h-full bg-neutral-200 rounded-full -z-20" :style="{ width: `${progress}%` }" style='width:100%;'></div>
    <div class="absolute border-t border-black bottom-0 left-0 w-full h-2 bg-neutral-200 rounded-full cursor-pointer" @click="seek($event)"></div>
</div>
<?php else: ?>
  <?= $block ?>
<?php endif ?>

<script>
function audioPlayer() {
    return {
        playing: false,
        audio: null,
        progress: 0,
        currentTime: '00:00',
        volume: 1,

        init() {
            this.audio = this.$refs.audio;
            this.audio.addEventListener('timeupdate', this.updateProgress.bind(this));
            this.audio.volume = this.volume;
        },
        play() {
            if (this.audio) {
                this.audio.play();
                this.playing = true;
            }
        },
        pause() {
            if (this.audio) {
                this.audio.pause();
                this.playing = false;
            }
        },
        updateProgress() {
            if (this.audio) {
                this.progress = (this.audio.currentTime / this.audio.duration) * 100;
                this.currentTime = this.formatTime(this.audio.currentTime);
            }
        },
        updateVolume() {
            if (this.audio) {
                this.audio.volume = this.volume;
            }
        },
        formatTime(seconds) {
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return `${min}:${sec < 10 ? '0' : ''}${sec}`;
        },

        seek(event) {
            const clickX = event.offsetX;
            const totalWidth = event.target.offsetWidth;
            const clickPercent = (clickX / totalWidth);
            const newTime = clickPercent * this.audio.duration;
            this.audio.currentTime = newTime;
        }
    };
}
</script>
