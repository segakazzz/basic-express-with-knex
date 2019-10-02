const express = require('express')
const app = express()
const port = 9000
const dbConfig = require('./knexfile.js')
// console.log(dbConfig.development)
var knex = require('knex')(dbConfig.development)

function getAllCohorts () {
  return knex
    .from('Cohorts')
    .where({ isActive: true })
}

app.get('/', (req, res) => {
  getAllCohorts()
  .then(function (allCohorts){
      const html = allCohorts.map(function(cohort){
          return render(cohort)
      })

      res.send(html.join(''))
  })
})

app.get('/cohorts/:slug', function(req, res){
    console.log(req.params)
    getOneCohorts(req.params.slug)
    .then(function(cohort){
        res.send('<pre>'+ JSON.stringify(cohort) +'</pre>')
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!😀`)
})


function render(cohort){
    return `<li>${cohort.title}</li>`
}

function getOneCohorts(slug){
    const sql = "SELECT * FROM Cohorts WHERE slug= ?"
    console.log(sql)
    return knex.raw(sql, [slug])
}