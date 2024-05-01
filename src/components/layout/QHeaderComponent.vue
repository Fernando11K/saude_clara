<template>
    <q-header reveal elevated class="bg-red-14" :class="{ 'glossy': q.platform.is.mobile }">
        <q-toolbar>
            <q-btn v-if="q.platform.is.desktop" flat dense round icon="menu" aria-label="Menu"
                @click="toggleLeftDrawer" />

            <q-toolbar-title class="text-center">
                <q-avatar class="pointer">
                    <q-icon @click="toggleFullscreen" name="fa-solid fa-heart fa-beat " />
                </q-avatar>
                Saúde Clara
            </q-toolbar-title>

            <!--  <div>Saúde Clara v0.0.1</div>-->
        </q-toolbar>
    </q-header>

</template>
<script setup>
import { useQuasar } from 'quasar';

const q = useQuasar()
const emits = defineEmits(['statusMenuLateral'])

const toggleFullscreen = () => (q.fullscreen.isActive) ? q.fullscreen.exit() : q.fullscreen.request()
const toggleLeftDrawer = () => {
    emits('statusMenuLateral')
}
</script>