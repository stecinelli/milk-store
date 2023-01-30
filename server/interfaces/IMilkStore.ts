type Results = {
    name: string,
    type: string,
    storage: number,
    id: string,
}

interface IMilkStore {
  count: number,
  results: Results[],
}

export default IMilkStore
