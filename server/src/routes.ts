import express from 'express'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "02525600867ae1",
      pass: "69317d8a5d9d56"
    }
});


routes.post('/feedbacks', async (req, resp) => {
    const { type, comment, screenshot } = req.body
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository)

    submitFeedbackUseCase.execute({
        type, comment, screenshot
    })

    // await transport.sendMail({
    //     from: "Equipe Feedget <oi@feedgat.com>",
    //     to: "Marco Túlio <marcotuliovaleriano2014@gmail.com>",
    //     subject: "Novo feedback",
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
    //         `<p>Tipo de feedback: ${type}</p>`,
    //         `<p>Comentario: ${comment}</p>`,
    //         `</div>`
    //     ].join('\n')
    // })

    return resp.status(201).send()
})