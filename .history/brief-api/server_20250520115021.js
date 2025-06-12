const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const briefRouter = require('./routes/brief')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/brief', briefRouter)

const formRouter = require('./routes/form')
app.use('/api/form', formRouter)

const formAdminRouter = require('./routes/form_admin');
app.use('/api/form-admin', formAdminRouter);

const PORT = 3001
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
