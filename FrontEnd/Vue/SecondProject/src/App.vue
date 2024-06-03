<template>
  <nav-bar/>
  <commencer/>
  <div class="third">
    <symptom title="Loem Ipsum" desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
    <symptom title="Sed ut perspiciatis" desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
    <symptom title="magni Dolores" desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"/>
    <symptom title="Nemo Enim" desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"/>
  </div>
  <div class="center company-color">
    <p class="bold">In an Emergency Need Help Now?</p>
    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button>Make An Appointment</button>
  </div>
  <div class="center-div">
    <p class="center bold">ABOUT US</p>
    <div class="underline"></div>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    <div class="company-about">
      <img src="./assets/img/about.jpg"/>
      <div class="center-div">
        <p class="bold">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</p>
        <p>Lorem ispum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
          <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
        </ul>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
    </div>
  </div>
  <div class="stats">
    <statistics 
      v-for="statistic in stats"
      :stats=statistic.stats 
      :keyword=statistic.keyword
      :desc=statistic.desc
      />
  </div>
  <div class="features">
    <div class="in-feats">
      <feature
      v-for="feat in feats"
      :title=feat.title
      :desc=feat.desc
      />
    </div>
    <img src="./assets/img/features.jpg">
  </div>
  <div class="company-services">
    <p class="center bold">SERVICES</p>
    <div class="underline"></div>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    <div class="services
    ">
      <services 
      v-for="serv in servs"
      :title=serv.title
      :desc=serv.desc
      />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        stats: [
          {
            stats: 85,
            keyword: "Doctor",
            desc: "adipisci atque cum quia aut numquam delectus"
          },
          {
            stats: 26,
            keyword: "Departments",
            desc: "consequuntur quae qui deca rode"
          },
          {
            stats: 14,
            keyword: "Research Lab",
            desc: "aut commodi quaerat. Aliquam ratione"
          },
          {
            stats: 150,
            keyword: "Awards",
            desc: "rerum asperiores dolor molestiae doloribu"
          },
        ],
        feats: [
          {
            title: "Est labore ad",
            desc: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
          },
          {
            title: "Harum esse qui",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
          },
          {
            title: "Aut occaecati",
            desc: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
          },
          {
            title: "Beatae veritatis",
            desc: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta"
          },
        ],
        servs: [
          {
            title: "Lorem Ipsum",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
          },
          {
            title: "Dolor Sitema",
            desc: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
          },
          {
            title: "Sed ut perspiciatis",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          },
          {
            title: "Magni Dolores",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          },
        ],
      }
    }
  }
</script>
<style>
  * {
    box-sizing: border-box;
  }

  .third {
    height: 300px;
    width: 100%;
    display: flex;
    align-content: center;
  }

  .center {
    text-align: center;
  }

  .bold {
    font-weight: bold;
  }

  .company-color {
    background-color: #3fbbc0;
  }

  .company-about {
    display: flex;
    justify-content: center;
  }

  img {
    height: 300px;

  }

  .underline {
    height: 5px;
    width: 50px;
    background-color: #3fbbc0;
    margin: 0 auto;
    padding: 0;
  }

  .center-div {
    margin: auto;
  }

  .stats {
    display: flex;
  }

  .features {
    display: flex;
    height: 300px;
    flex-wrap: wrap;
  }

  .in-feats {
    display: flex;
    flex-direction: column;
  }

  .services {
    display: flex;
  }
</style>