import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
  Blog model for strong typing by screating interface
*/
export interface Blog {
  id?: string; // optional for create
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  /*    Base API URL (json-server or real backend)  
  For creating Json-server refer cmds:
  -$ npm install -g json-server
  -$ json-server --watch db.json --port 3000
  
  */
  private baseUrl = 'http://localhost:3000/blogs'; // we created json-server using json file, as temp DB

  constructor(private http: HttpClient) {}

  /*
    Fetch all blogs
  */
  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.baseUrl);
  }

  /*
    Fetch single blog by ID
  */
  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.baseUrl}/${id}`);
  }

  /*
    Create a new blog
  */
  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.baseUrl, blog);
  }

  /*
    Update entire blog object
  */
  updateBlog(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.baseUrl}/${blog.id}`, blog);
  }

  /*
    Update specific fields of a blog
  */
  patchBlog(id: string, data: Partial<Blog>): Observable<Blog> {
    return this.http.patch<Blog>(`${this.baseUrl}/${id}`, data);
  }

  /*
    Delete a blog by ID
  */
  deleteBlog(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
