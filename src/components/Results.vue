<template>
    <div id="results-page">
        <div class="container-map">
            <div id="btns-map">

                <div id="map_view">
                    <button id="default"></button>
                    <button id="schema"></button>
                    <button id="account-tree"></button>
                </div>

                <div id="zoom">
                    <button id="zoom_in"></button>
                    <button id="zoom_out"></button>
                </div>

                <button class="" id="subtitles"></button>
                
            </div>
        </div>
    </div>
</template>

<script>
import HeaderApp from './HeaderApp.vue'
    export default {
  components: { HeaderApp },
        name: 'Results',
        // mounted() {
        //     document.title('Resultados | upLink')
        // }
    }
</script>