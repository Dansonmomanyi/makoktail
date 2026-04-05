import React, { useEffect } from 'react'
import { Form, useActionData, useNavigation, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

const NEWSLETTER_API = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  if (request.method !== 'POST') {
    return null
  }

  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')

  
  if (!name || !name.trim()) {
    return { success: false, message: 'Name is required' }
  }
  if (!email || !email.trim()) {
    return { success: false, message: 'Email is required' }
  }

  const data = {
    name: name.trim(),
    email: email.trim(),
  }

  try {
    const response = await fetch(NEWSLETTER_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Failed to subscribe to newsletter')
    }

    const result = await response.json()
    
    // Check if API returned an error in the response body
    if (result.success === false) {
      return { success: false, message: result.message || 'Failed to subscribe to newsletter' }
    }
    
    // Store success message and redirect to home page
    return redirect('/')
  } catch (error) {
    return { success: false, message: error.message || 'An error occurred' }
  }
}

const Newsletter = () => {
  const actionData = useActionData()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  useEffect(() => {
    if (actionData && !actionData.success) {
      toast.error(actionData.message)
    }
  }, [actionData])

  return (
    <div className='page-content'>
      <div className='content-wrapper'>
        <h1>Newsletter</h1>
        <p>Subscribe to our newsletter to get the latest cocktail recipes and mixology tips delivered straight to your inbox!</p>
        <Form method='post' className='form'>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' id='name' name='name' className='form-input' placeholder='Enter your name' required />
          </div>
          <div className='form-row'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' id='email' name='email' className='form-input' placeholder='Enter your email' required />
          </div>
          <button type='submit' className='btn btn-block' disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </Form>
      </div>
    </div>
  )
}

export default Newsletter