import { AppManager } from "@module/apps/manager/manager.service.ts";
import { AppManagerConfig } from "@module/apps/pkg/config.service.ts";
import { Body, Controller, Get, Query, Post } from "danet/mod.ts";
import { Tag, ReturnedType } from "danetSwagger/decorators.ts";

@Tag("Apps")
@Controller("apps")
export class AppManagerController {

  constructor(private apps: AppManager, private appConfig: AppManagerConfig) {
  }

  @Get("installed")
  @ReturnedType(String)
  listApps() {
    return this.appConfig.getConfig();
  }

  @Get("marketplace")
  @ReturnedType(String)
  getMarketPlaceApps(@Query() q?: {dir?: string }) {
    if (q.dir) {
      return this.apps.getMarketPlaceApps({ dir: q.dir });
    } else {
      return this.apps.getMarketPlaceApps();
    }
  }

  @Post("install")
  @ReturnedType(Object)
  async installApp(@Body("code") code: string, @Body("pkg") pkg?: string): Promise<{success: boolean}> {
      let download = await this.apps.installApp(code, pkg);
      return { success: true };
  }

  @Post("remove")
  @ReturnedType(Object)
  removeApp(@Body("code") code: string): {success: boolean} {
     if(this.apps.removeApp(code)) {
       return { success: true };
     }else {
       return { success: false };
     }
  }

}
