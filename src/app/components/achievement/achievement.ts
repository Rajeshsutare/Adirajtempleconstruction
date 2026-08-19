import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CERTIFICATE_DATA } from '../../data/temple-data';

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievement.html',
  styleUrl: './achievement.less',
})
export class AchievementComponent {

  certificates = CERTIFICATE_DATA;

}
