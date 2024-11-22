import { Component } from '@angular/core';
import { MyRevPipe } from './my-rev.pipe';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe'
import { MarvellousChkPipe } from './marvellous-chk.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment9',
  standalone: true,
  imports: [MyRevPipe,MyAddPipe,MyMultPipe,MarvellousChkPipe,CommonModule],
  templateUrl: './assignment9.component.html',
  styleUrl: './assignment9.component.css'
})
export class Assignment9Component {
	public Name = "Marvellous";
    public numData = 13;
}
