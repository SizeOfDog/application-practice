import { Component, OnInit, NgModule} from '@angular/core';
import { Worklist } from '../../Models/worklist';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  /*worklist model for jobs808992*/
  worklist: Worklist[] = [{
    id: 1,
    companyname: 'Pronavigator',
    jobrole: 'Data Science Specialist',
    description: {
        point1: 'Ensured accuracy of data entered in the company’s proprietary platform.',
        point2: 'Tested new features, found, captured/logged, prioritized, and fixed bugs.',
        point3: 'Worked with data science team to extract and assess data for customer reporting and contractual obligations.',
        point4: 'Worked within agreed upon timeframes, communicated clearly with team members, and delivered quality results.'
      }
    },
    {
      id: 2,
      companyname: 'Rowlands',
      jobrole: 'Dairy Clerk',
      description: {
        point1: 'Updated and listed product prices in the store database to ensure accuracy of displayed prices.',
        point2: 'Interacted with store customers in a professional manner to provide any help needed.',
        point3: 'Stocked shelves in an efficient, organized, and detailed fashion to ensure the best possible customer experience.',
        point4: 'Trained new employees using leadership and collaborative skills to further their understanding and success.'
      }
    }
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  githubWindow() {
    window.open('https://www.github.com/quantSoda');
  }

}

