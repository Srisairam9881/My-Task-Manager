import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
selector: 'app-sidebar',
templateUrl: './sidebar.component.html',
styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
constructor(private auth:AuthService ) { }

ngOnInit(): void {
}
logout()
{
this.auth.logout();
window.location.reload()
}

}
