interface SendContactMessageArgs {
  formData: Record<string, string>
}

export async function sendContactMessage({ formData }: SendContactMessageArgs): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return
  }
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  if (!response.ok) {
    throw new Error('Failed to send. Please try again.')
  }
}
