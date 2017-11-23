import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../SERVICE/api.service';
declare var layer: any;
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  params: Params = new Params();
  constructor(private api: ApiService) {

  }
  Guid = "";
  UlState = false;
  GuidState = 0;//300 500
  ngOnInit() {
    this.Guid = "";
    this.UlState = false;
    this.GuidState = 0;
  }
  checkGuid() {
    if (!this.Guid) {
      layer.msg("请输入6位操作码！");
      return;
    }

    this.api.Post({ optCode: this.Guid }, "getCodeState").subscribe(res => {
      // let resDate = {
      //   State: 0,
      //   Msg: "",
      //   Value: {
      //     optCode: "d713hj",
      //     orderState: 500
      //   }
      // }

      if (res.State == 0) {
        let data = res.Value;
        this.UlState = true;
        this.GuidState = data.OrderState;
        this.params.optCode=data.OptCode;
      } else {
        this.UlState = false;
        layer.msg("未找到该操作码，请重新输入！");
      }
    });


  }
  submit() {
    this.params.optCode = this.Guid;
    console.log(this.params);
    layer.msg(JSON.stringify(this.params));
    this.api.Post(this.params, "submit").subscribe(res => {
      console.log(res);
    });
  }
}
export class Params {
  public optCode: string = "";
  //是否为vip
  public isVip: boolean = false;
  //vip号码
  public vipCard: string = "";
  //客人喜欢的酒水
  public favFoodAndDrink: string = "";//300 /500
  //客人建议
  public feedback: string = "";
  //客人姓名
  public userName: string = "";
  //客人手机号
  public userPhone: string = "";
  //客人生日
  public userBirthday: Date;

  //是否已经加入vip
  public isJoinUsVip: boolean = false;
  //已加入vip号码
  public UsVipNumber: string = "";
}

