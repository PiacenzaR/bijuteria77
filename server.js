const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


let transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'seuemail@gmail.com', 
    pass: 'suasenha' 
  }
});


app.post('/enviar-email', (req, res) => {
  const { resposta, mensagem } = req.body;

  let mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'seuemaildestino@gmail.com', 
    subject: 'Confirmação de resposta',
    text: `A resposta dela foi: ${resposta}. Mensagem: ${mensagem}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send({ success: false, message: 'Erro ao enviar e-mail.' });
    } else {
      console.log('E-mail enviado: ' + info.response);
      res.send({ success: true, message: 'E-mail enviado com sucesso.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
