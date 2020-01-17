<template>
    <div>
        <div class="hero page-title dashboard">
            <h1 class="title">
                📊 Dashboard 
            </h1>
        </div>
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <div class="chart-container">
                    <GChart
                    style="width: 100% !important; height: auto"
                    type="ColumnChart" 
                    :data="formatted_stats"
                    :options="options"
               
                     />
                     </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="card is-flex" style="height: 125px;">
                        <div class="column has-background-info boxIcon">
                            <span>👥</span>
                            <small>Total Users</small>
                        </div>
                        <div class="column boxIcon"><span>{{total_users}}</span></div>  
                    </div>
                </div>
                <div class="column">
                    <div class="card is-flex" style="height: 125px;">
                        <div class="column has-background-primary boxIcon">
                            <span>⚔️</span>
                            <small>Total Clans</small>
                        </div>
                        <div class="column boxIcon"><span>{{total_clans}}</span></div>  
                    </div>
                </div>
                <div class="column">
                    <div class="card is-flex" style="height: 125px;">
                        <div class="column has-background-success boxIcon">
                            <span>🗳️</span>
                            <small>Total Votes</small>
                        </div>
                        <div class="column boxIcon"><span>{{total_votes}}</span></div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
    name: 'Dashboard',
    components: {
        GChart
    },
    data() {
        return {
            total_clans: null,
            total_users: null,
            total_votes: null,
            stats: [],
            options: {
                legend: { position: 'top', alignment: 'center' },
                colors: ['rgb(32, 156, 238)', '#7957d5', 'rgb(72, 199, 116)'],
                'chartArea': {'width': '95%', 'height': '80%'},
                animation:{
                    duration: 1000,
                    easing: 'out',
                },
            }
        }
    },
    computed: {
        formatted_stats() {
            var formatted_stats = []
            for(var i in this.stats) {
                var formatted_date = new Date(i).toLocaleDateString()
                formatted_stats.unshift([formatted_date, this.stats[i].users,this.stats[i].clans,this.stats[i].votes])
            }
            formatted_stats.unshift(['Date','Users','Clans','Votes'])
            return formatted_stats
        }
    },
    created() {
        this.$axios.get('https://api.fortniteclan.com/dashboard')
        .then(response => {
            this.total_clans = response.data.total_clans
            this.total_users = response.data.total_users
            this.total_votes = response.data.total_votes
            this.stats = response.data.by_date
        })
    }
}
</script>

<style lang="scss">
    .chart-container {
        padding: 20px 0;
        width:100%;
        height:100%;
        position:relative;
        @media(max-width:800px) {
            padding:5px 0px;
        }
    }
    h1.title {
        @media(max-width: 500px) {
            font-size:44px !important;
        }
    }
    .boxIcon {
        align-items: center !important;
        display: flex !important;
        justify-content: center;
        flex-direction: column;
        span {
            opacity: 0.95;
            font-size:50px;
        }
        small {
            font-weight:bold;
            color: #fff;
        }

    }
</style>