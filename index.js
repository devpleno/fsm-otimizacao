const express = require('express')
const compression = require('compression')

const app = express()

const largeObject = []
for (let i = 0; i < 50000; i++) {
  largeObject.push({
    name: 'Tulio Faria',
    address: 'address',
    anotherField: 'aaaaaaaaa'
  })
}

app.use(compression())
// Aula GZip:
// app.get('/', (req, res) => res.send(largeObject))

// Aula Controlando Cache
app.get('/', (req, res) => {
  res.header('Cache-Control', 'public, max-age=3600')
  res.send(largeObject)
})
app.listen(3000, () => console.log('Listening'))