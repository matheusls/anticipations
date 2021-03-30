class HttpClient {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async post(body: Record<string, unknown>) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  }
}

export default HttpClient;
