// This is the demo secret key. In production, we recommend
// you store your secret key(s) safely.
const ;

async function handlePost(request) {
  const body = await request.formData();
  // Turnstile injects a token in "cf-turnstile-response".
  const token = body.get('cf-turnstile-response');
  const ip = request.headers.get('CF-Connecting-IP');

  // Validate the token by calling the
  // "/siteverify" API endpoint.
  let formData = new FormData();
  formData.append('secret', SECRET_KEY);
  formData.append('response', token);
  formData.append('remoteip', ip);
  const idempotencyKey = crypto.randomUUID();
  formData.append('idempotency_key', idempotencyKey);

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const firstResult = await fetch(url, {
    body: formData,
    method: 'POST',
  });
  const firstOutcome = await firstResult.json();
  if (firstOutcome.success) {
    // ...
  }

  // A subsequent validation request to the "/siteverify" 
  // API endpoint for the same token as before, providing 
  // the associated idempotency key as well.
  const subsequentResult = await fetch(url, {
    body: formData,
    method: 'POST',
  });

  const subsequentOutcome = await firstResult.json();
  if (subsequentOutcome.success) {
    // ...
  }

}