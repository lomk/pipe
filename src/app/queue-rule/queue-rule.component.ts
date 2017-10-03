import {Component, OnInit} from '@angular/core';
import {QueueRuleService} from './queue-rule.service';
import {QueueRule} from './queue-rule';
import {Router} from '@angular/router';

@Component({
    selector: 'my-queue-rules',
    templateUrl: './queue-rule.component.html' ,
    // styleUrls: [`./queue-rule.component.css`],
    providers: [QueueRuleService]
})
export class QueueRuleComponent implements OnInit {
    queueRules: QueueRule[];
    selectedQueueRule: QueueRule;


    constructor(
        private router: Router,
        private queueRuleService: QueueRuleService) {
    }

    getQueueRules(): void {
        // this.queueRuleService.getQueueRules().then(queueRules => this.queueRules = queueRules);
        this.queueRuleService.getQueueRules().subscribe(queueRules => this.queueRules = queueRules);
    }

    addQueueRule(address: string): void{
        address = address.trim();
        if (!address) { return; }
        this.queueRuleService.create(new QueueRule()).subscribe(queueRule => {
            this.queueRules.push(queueRule);
            this.selectedQueueRule = null;
        });
    }

    deleteQueueRule(queueRule: QueueRule): void {
        this.queueRuleService
            .delete(queueRule.id)
            .subscribe(() => {
                this.queueRules = this.queueRules.filter(h => h !== queueRule);
                if (this.selectedQueueRule === queueRule) { this.selectedQueueRule = null; }
            });
    }

    ngOnInit(): void {
        this.getQueueRules();
    }

    onSelect(queueRule: QueueRule): void {
        this.selectedQueueRule = queueRule;
    }

    goToDetail(): void {
        this.router.navigate(['/queue-rule-details', this.selectedQueueRule.id]);
    }
}