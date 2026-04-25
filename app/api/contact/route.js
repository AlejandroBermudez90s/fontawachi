import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json()

    await resend.emails.send({
      from: "Fontawachi <contacto@fontawachi.com>",
      to: "fontawachi@gmail.com",
      reply_to: email,
      subject: `Nuevo presupuesto: ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
            Nueva solicitud de presupuesto
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; width: 140px;">Nombre</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 0; color: #6b7280;">Email</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280;">Teléfono</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;">${phone || "No indicado"}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 10px 0; color: #6b7280;">Servicio</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1a1a1a;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Mensaje</td>
              <td style="padding: 10px 0; color: #1a1a1a;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #6b7280; font-size: 12px;">
            Enviado desde el formulario de contacto de fontawachi.com
          </p>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ ok: false, error: "Error al enviar el mensaje" }, { status: 500 })
  }
}