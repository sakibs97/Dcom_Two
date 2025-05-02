import e from 'express';
const app = e();

app.use(e.json)
app.use(e.urlencoded({extended:true}))
app.use(e.static('public'))
// app.use(cors({
//     origin:
// }))

export { app };
