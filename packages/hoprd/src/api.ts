import type Hopr from '@hoprnet/hopr-core'
import { Commands } from './commands'
import bodyParser from 'body-parser'

export default function setupAPI(node: Hopr, logs: any, options: any) {
  const http = require('http')
  const service = require('restana')()
  service.use(bodyParser.text({ type: '*/*' }))

  service.get('/api/v1/version', (_, res) => res.send(node.getVersion()))
  service.get('/api/v1/address/eth', async (_, res) => res.send((await node.getEthereumAddress()).toHex()))
  service.get('/api/v1/address/hopr', async (_, res) => res.send(node.getId().toB58String()))

  const cmds = new Commands(node)
  service.post('/api/v1/command', async (req, res) => {
    logs.log('executing API commamd', req.body)
    await node.waitForRunning()
    logs.log('Node is running')
    cmds.execute(req.body).then((resp: any) => {
      logs.log('command complete', resp)
      res.send(resp)
    })
  })

  const hostname = options.restHost
  const port = options.restPort
  http
    .createServer(service)
    .listen(port, hostname, () => {
      logs.log(`Rest server on ${hostname} listening on port ${port}`)
    })
    .on('error', (err: any) => {
      console.log(`Failed to start REST API.`)
      console.log(err)
      process.exit(1)
    })
}
