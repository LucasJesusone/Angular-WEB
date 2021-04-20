import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


// TODO: Replace this with your own data model type
export interface UserRead2Item{
  name: string;
  email: string;
  status: string;
  
}

// TODO: replace this with real data from your application
const data: UserRead2Item[] = [{ name: '', email: '', status: ''}];


/**
 * Data source for the UserRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserRead2DataSource extends DataSource<UserRead2Item> {
  
  
    
  data: UserRead2Item[] = data;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  filter: string;
  dataSource: MatTableDataSource<any>;
  
 
  
 
  constructor() {
    super();
    
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UserRead2Item[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
        
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        })
      );
    } else {
      throw Error(
        
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  
  disconnect(): void {}

  private getPagedData(data: UserRead2Item[]): UserRead2Item[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UserRead2Item[]): UserRead2Item[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'email':
          return compare(a.name, b.name, isAsc);
          case 'status':
          return compare(+a.status, +b.status, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
