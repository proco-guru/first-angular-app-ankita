import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Blog, BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.scss',
})
export class BlogDetails implements OnInit {
  blogService = inject(BlogService); //injecting Services
  route = inject(ActivatedRoute);

  @Input() id?: string; // The router automatically binds the 'id' parameter here
  cd = inject(ChangeDetectorRef);

  blog!: Blog;
  suggestions: any[] = [];

  ngOnInit(): void {
    // Get ID from URL
    this.id = this.route.snapshot.paramMap.get('id')!; // to get ID para from URL

    this.getBlogById(this.id); //passing to mthod

    // Suggestions Data
    this.suggestions = [
      {
        title: 'Why Angular is Still Powerful',
        author: 'Rahul varma',
        date: 'Mar 18',
      },
      {
        title: '10 Habits of Great Developers',
        author: 'Neha gonde',
        date: 'Mar 15',
      },
      {
        title: 'Frontend Trends in 2026',
        author: 'Karan shelar',
        date: 'Mar 10',
      },
    ];
  }

  getBlogById(id: string) {
    //calling service method to retrive the BlogData from Json-server
    this.blogService.getBlogById(id).subscribe((b) => {
      console.log('blogs', b);
      this.blog = b;
      this.cd.detectChanges();
    });
  }
}
