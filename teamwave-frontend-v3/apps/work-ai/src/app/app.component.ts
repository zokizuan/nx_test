import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule, NgFor } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule, moveItemInArray, transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, DragDropModule, CommonModule],
  selector: 'teamwave-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'work-ai';

  todo: string[] = ['Conversation 1', 'Conversation 2', 'Conversation 3'];
  folders: { name: string, id: string, conversations: string[] }[] = [
    { name: 'Folder 1', id: 'folder1', conversations: ['Conversation 4', 'Conversation 5'] },
    { name: 'Folder 2', id: 'folder2', conversations: ['Conversation 6'] }
  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
