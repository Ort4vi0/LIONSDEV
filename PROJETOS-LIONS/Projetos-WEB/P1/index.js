import express from 'express'
import fs from 'fs';
import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true })
const app = express()
const port = 3000
const DBMASTER = "pepino.json"

function LimparTela(){
    console.clear()
}

app.use(express.json())

app.post("/dividir", (req,res) => {
    const {numero1, numero2} = req.body
    res.send(numero1 / numero2)
})
app.post("/mutiplicar", (req,res) => {
    const {numero1, numero2} = req.body
    res.send(numero1 * numero2)
})
app.post("/somar", (req,res) => {
    const {numero1, numero2} = req.body
    res.send(numero1 + numero2)
})
app.post("/subtrair", (req,res) => {
    const {numero1, numero2} = req.body
    res.send(numero1 - numero2)
})


app.get("/", (req,res) => {
    res.send("VERDE E COMESTIVEL\n")
    MSN("JORGE")
})

app.listen(port, () =>{
    console.log(`Iniciado com sucesso em: ${port}`)
})

function salvarDados(nomeArquivo, dados, callback) {
    const jsonString = JSON.stringify(dados, null, 2);
    fs.writeFile(nomeArquivo, jsonString, (err) => {
      if (err) {
        console.log(`Erro ao salvar o arquivo '${nomeArquivo}':`, err);
      } else {
        //console.log(`Dados de '${nomeArquivo}' salvos com sucesso!`);
      }
      if (callback) callback();
    });
  }