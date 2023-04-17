export interface IExercise {
  id: string;
  name: string;
  time: number;
  calorie: number;
}

export interface IRecord {
  title: string;
  image: string;
  description: string;
  id: string;
}

export interface IMenu {
  name: string;
  image: string;
  id: string;
}

export interface IProgress {
  value: number;
  title: string;
}

export interface ILineChartDataItem {
  label: string;
  value: number;
}

export interface ILineChartData {
  label: string;
  data: ILineChartDataItem[];
}
