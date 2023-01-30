import IResults from './IResults';

interface IState {
  loading: boolean,
  results: IResults[],
  errorMessage: string,
}

export default IState;
