export class InMemoryDataService {
  createDb() {
    const doggos = [
      { id: 11, name: 'Labrador Retriever' },
      { id: 12, name: 'German Shepherd Dog' },
      { id: 13, name: 'Golden Retriever' },
      { id: 14, name: 'Bulldog' },
      { id: 15, name: 'Beagle' },
      { id: 16, name: 'French Bulldog' },
      { id: 17, name: 'Yorkshire Terrier' },
      { id: 18, name: 'Poodle' },
      { id: 19, name: 'Rottweiler' },
      { id: 20, name: 'Boxer' }
    ];
    return { doggos };
  }
}
