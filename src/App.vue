<template>
  <div class="mainpage">
    <app-header></app-header>
    <div>
      <app-titlebar dsid='22827'></app-titlebar>
      <app-ageinfo></app-ageinfo>
      <app-contacts></app-contacts>
      <app-publications></app-publications>
      <app-contacts></app-contacts>
      <app-commondata></app-commondata>
      <div class="componentbox">
        <h2>Database Snapshots</h2>
        The most recent <a href="http://www.neotomadb.org/snapshots">Neotoma PostgreSQL Database Snapshot</a> is available online.

        <h2>Data Use Policy</h2>
        We ask all data users to consider the <a href="http://www.neotomadb.org/data/category/use">Neotoma Data Use policy</a> as well as the general guidelines of open and ethical data sharing when using this data.
      </div>
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
  import './assets/text.css';
  import './assets/containers.css'

  export default {
    name: 'app',
    components: {
      'app-footer': Footer,
      'app-header': Header,
      'app-titlebar': titleCard,
      'app-publications': publicationCard,
      'app-ageinfo': ageinfo,
      'app-contacts': contacts,
      'app-commondata': commondata
    }
  }
</script>
