import express from "express"; 

const app = express();
app.use(express.json());

app.use('/api', ProductRoutes);
app.use(errorMiddleware);

export default app;