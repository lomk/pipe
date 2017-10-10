import { Component, OnInit } from '@angular/core';

import { QueueType } from './queue-type';
import { QueueTypeService } from './queue-type.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-queue-types',
    templateUrl: './queue-type.component.html' ,
    // styleUrls: [`./queue-type.component.css`],
    providers: [QueueTypeService]
})
export class QueueTypeComponent implements OnInit {
    queueTypes: QueueType[];
    selectedQueueType: QueueType;

    constructor(
        private router: Router,
        private queueTypeService: QueueTypeService) { }

    getQueueTypes(): void {
        this.queueTypeService.getQueueTypes().subscribe(queueTypes => this.queueTypes = queueTypes,
          error => {
            if ( error === 401 ) {
              this.router.navigate(['/login']);
            }
          });
    }

    delete(queueType: QueueType): void {
        this.queueTypeService
            .delete(queueType.id)
            .subscribe(() => {
                this.queueTypes = this.queueTypes.filter(h => h !== queueType);
                if (this.selectedQueueType === queueType) { this.selectedQueueType = null; }
            });
    }

    ngOnInit(): void {
        this.getQueueTypes();
    }

    onSelect(queueType: QueueType): void {
        this.selectedQueueType = queueType;
    }

    goToDetail(): void {
        this.router.navigate(['/queue-type-details', this.selectedQueueType.id]);
    }
}
