import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  public title: string = 'item-project';
  public name: string = "";
  public counter: number = 0;

  public newName: string = "";
  public names: string[] = [];

  public up(): void {
    this.counter++;
  }

  public down(): void {
    this.counter--;
  }

  public addNewName(): void {
    if (this.newName) {
      this.names.push(this.newName);
      this.newName = "";
    }
  }

  public removeNameAt(index: number): void {
    if (this.names.length > index) {
      this.names.splice(index, 1);
    }
  }
}
