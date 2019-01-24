export class Task {
  done: boolean = false;

  constructor(public description: string, public priority: number) {

  }

  displayPriority(){
    return this.priority;
  }

  markDone() {
    this.done = true;
  }
}
