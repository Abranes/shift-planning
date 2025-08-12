/** @odoo-module **/

import {_t} from "@web/core/l10n/translation";
import {registry} from "@web/core/registry";
import {listView} from "@web/views/list/list_view";
import {kanbanView} from "@web/views/kanban/kanban_view";
import {ListController} from "@web/views/list/list_controller";
import {KanbanController} from "@web/views/kanban/kanban_controller";
import {useService} from "@web/core/utils/hooks";

export class ShiftPlanningListController extends ListController {
    setup() {
        super.setup();
        this.action = useService("action");
        this.user = useService("user");
    }

    async onClickGeneratePlanning() {
        const isHrOfficer = await this.user.hasGroup("hr.group_hr_user");
        if (isHrOfficer) {
            this.action.doAction({
                name: _t("Generate Planning"),
                type: "ir.actions.act_window",
                res_model: "shift.planning.wizard",
                target: "new",
                views: [[false, "form"]],
            });
        }
    }
}

export class ShiftPlanningKanbanController extends KanbanController {
    setup() {
        super.setup();
        this.action = useService("action");
        this.user = useService("user");
    }

    async onClickGeneratePlanning() {
        const isHrOfficer = await this.user.hasGroup("hr.group_hr_user");
        if (isHrOfficer) {
            this.action.doAction({
                name: _t("Generate Planning"),
                type: "ir.actions.act_window",
                res_model: "shift.planning.wizard",
                target: "new",
                views: [[false, "form"]],
            });
        }
    }
}

export const ShiftPlanningListView = {
    ...listView,
    Controller: ShiftPlanningListController,
    buttonTemplate: "ShiftPlanningtListView.buttons",
};

export const ShiftPlanningKanbanView = {
    ...kanbanView,
    Controller: ShiftPlanningKanbanController,
    buttonTemplate: "ShiftPlanningtKanbanView.buttons",
};

registry.category("views").add("shift_planning_tree", ShiftPlanningListView);
registry.category("views").add("shift_planning_kanban", ShiftPlanningKanbanView);
