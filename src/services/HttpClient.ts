class HttpClient {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async post(body: Record<string, unknown>) {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(response.status.toString());
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error(error);
    }
  }
}

export default HttpClient;
