import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '8ziqk3bg',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skFnBFH9DjAUy0C7M0HLoBt3wjChPlz9KkKBtT8hOYkfJaQqrd3x37JAOeqVyOZoktDT6VGP85gxGYd7THaDZwpnOrQlkZfra8e3GUpc8iZBnPOt9zYKuPpAcqbF5buOuYXtLhlHL36AFhFuMspEUJNcGi5Sh5bRQ8iOEoVzE70qYS5akZQK',
  useCdn: false,
})