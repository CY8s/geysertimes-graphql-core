// import DataLoader from 'dataloader';
const DataLoader = require('dataloader')

const {
  getGeyserByID,
  getGeysersByID,
  getPredictions,
  getPredictionByGeyserID,
  getRecentEruptions,
  getEruptions,
  getEruptionByID,
  getLastEruptionByGeyserID,
} = require('./resolvers')

const geyserLoader = new DataLoader(keys =>
  Promise.all(keys.map(getGeyserByID))
)

const geysersLoader = new DataLoader(keys =>
  Promise.all(keys.map(getGeysersByID))
)

const predictionsLoader = new DataLoader(keys =>
  Promise.all(keys.map(getPredictions))
)
const predictionLoader = new DataLoader(keys =>
  Promise.all(keys.map(getPredictionByGeyserID))
)

const recentEruptionsLoader = new DataLoader(keys =>
  Promise.all(keys.map(getRecentEruptions))
)

const eruptionsLoader = new DataLoader(keys =>
  Promise.all(keys.map(getEruptions))
)

const eruptionLoader = new DataLoader(keys =>
  Promise.all(keys.map(getEruptionByID))
)

const lastEruptionLoader = new DataLoader(keys =>
  Promise.all(keys.map(getLastEruptionByGeyserID))
)

module.exports = {
  geyser: geyserLoader,
  geysers: geysersLoader,
  prediction: predictionLoader,
  predictions: predictionsLoader,
  eruption: eruptionLoader,
  eruptions: eruptionsLoader,
  recentEruptions: recentEruptionsLoader,
  lastEruption: lastEruptionLoader
}