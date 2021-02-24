<template>
  <div class="mainpage">
    <app-header></app-header>
    <app-titlebar :dsid=dsid v-if="dsid !== undefined"></app-titlebar>
    <app-emptypage v-if="dsid === undefined"></app-emptypage>
    <app-contacts :dsid=dsid v-if="dsid !== undefined"></app-contacts>
    <app-ageinfo :dsid=dsid v-if="dsid !== undefined"></app-ageinfo>
    <app-publications :dsid=dsid v-if="dsid !== undefined"></app-publications>
    <app-commondata :dsid=dsid v-if="dsid !== undefined"></app-commondata>
    <app-status></app-status>
    <div class="pagebox">
      <h2>Database Snapshots</h2>
      <p>The most recent <a href="http://www.neotomadb.org/snapshots">Neotoma PostgreSQL Database Snapshot</a> is available online.</p>

      <h2>Data Use Policy</h2>
      <p>We ask all data users to consider the <a href="http://www.neotomadb.org/data/category/use">Neotoma Data Use policy</a> as well as the general guidelines of open and ethical data sharing when using this data.</p>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Footer from './components/footer.vue'
  import Header from './components/header.vue'
  import ageinfo from './components/ageinfo.vue'
  import titleCard from './components/titlecard.vue'
  import publicationCard from './components/publicationCard.vue'
  import contacts from './components/contacts.vue'
  import commondata from './components/commondata.vue'
  import emptyPage from './components/emptypage.vue'
  import datastatus from './components/landingstatus.vue'
  import './assets/text.css';
  import './assets/containers.css'
  import 'bootstrap/dist/css/bootstrap.css'

  export default {
    name: 'app',
    props: ['dsid'],
    components: {
      'app-footer': Footer,
      'app-header': Header,
      'app-titlebar': titleCard,
      'app-publications': publicationCard,
      'app-ageinfo': ageinfo,
      'app-contacts': contacts,
      'app-commondata': commondata,
      'app-emptypage': emptyPage,
      'app-status': datastatus
    },
    data() {
      return {
        msg: "Rendered!"
      };
    }
  }
</script>
