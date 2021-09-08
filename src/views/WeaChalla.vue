 <div>
    <h1>¿Cómo puedo aportar?</h1>
    <h2 v-text="idioma[idiomaSeleccionado].titulo"></h2>
    <h3>{{idiomaSeleccionado}}</h3>
    <CambiarIdioma @clicked="onClickChild"></CambiarIdioma>
  </div>
</template>

<script>
import CambiarIdioma from '@/components/CambiarIdioma.vue'

export default {
  components: {
    CambiarIdioma
  },
  data () {
    return {
      idiomaSeleccionado: this.$idiomaGlobal,
      idioma: {
        spanish: {
          titulo: '¿Cómo puedo aportar?'
        },
        english: {
          titulo: 'How can I help?'
        }
      }
    }
  },
  methods: {
    onClickChild (value) {
      this.idiomaSeleccionado = value
    }
  },
  mounted () {
    this.idiomaSeleccionado = this.$root.$idiomaGlobal
  }
}
</script>

<style>

