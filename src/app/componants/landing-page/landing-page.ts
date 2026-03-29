import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router'; //For  RouterLink
import { Inject, PLATFORM_ID } from '@angular/core'; //using for the sessionStorage
import { Blog, BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements OnInit {
  LoginUserDetails: string | null = '';
  userName: string = '';
  blogs: Blog[] = []; //defining BlogType (we use interface to defined typed data)
  router = inject(Router);
  blogService = inject(BlogService); //injecting service Methods
  cd = inject(ChangeDetectorRef);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    //For getting LoggedIn User data  from session
    if (typeof window !== 'undefined' && window.sessionStorage) {
      this.LoginUserDetails = window.sessionStorage.getItem('UserName');
      let usersArray = this.LoginUserDetails ? JSON.parse(this.LoginUserDetails) : []; //parse json for retriving custData
      this.userName = usersArray.name; //retiveing Login User name
    }
  }

  ngOnInit() {
    this.getAllBlogs(); //calling method
  }

  getAllBlogs() {
    //calling service methods for retriving the Blog data from json-server
    this.blogService.getAllBlogs().subscribe((data) => {
      this.blogs = data;
      console.log('blogs from json', this.blogs);
      this.cd.detectChanges(); // force UI update
    });
  }

  topics = ['Programming', 'AI', 'Technology', 'Writing', 'Self Growth', 'Startups'];

  //method redirects to blogDetailsPage by adding Id in URL
  NavigateToBlogById(id: string): void {
    if (id) {
      this.router.navigate(['/blog-detail', id]);
    }
  }
}
