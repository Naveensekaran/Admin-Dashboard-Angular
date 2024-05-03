import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { setsEqual } from 'chart.js/dist/helpers/helpers.core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private userService: UserService, private router : Router){}
 
  item: string = 'Dashboard';
  totalUsers!: number;
  i!: number;
  india : number =0;
  others : number =0;
  public chart: any;
  public cardchart: any;

  ngOnInit(): void {
    this.createChart();
    this.getTotalUsers();
  }
  getTotalUsers(){
    this.userService.getUserList().subscribe(data=>{
      this.totalUsers= data.length;
      for(this.i=0;this.i<this.totalUsers;this.i++){
        if(data[this.i].country == "india"){
          this.india++;
        }
        else{
          this.others++;
        }
      }
    });
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['350','450', '572', '79', '182',
								 '574', '573', '576'],
            backgroundColor: 'grey'
          },
          {
            label: "Profit",
            data: ['542', '370', '536', '327', '117',
									 '300', '538', '541'],
            backgroundColor: 'skyblue'
          }  
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }
}
