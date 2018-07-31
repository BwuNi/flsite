<template>
<div>
    <div style="postion:absolue;top:0;left:0;width:100%;height:42px;background:#fff;padding:6px;border-bottom:1px solid #cccccc;">
        <div style="float:left;height:30px;line-height:30px;padding:0 12px;background:#4caaff;color:#fff;border-radius:2px;margin-right:6px;box-shadow:0 2px 4px 0 #cccccc">按钮1</div>
        <div style="float:left;height:30px;line-height:30px;padding:0 12px;background:#4caaff;color:#fff;border-radius:2px;margin-right:6px;box-shadow:0 2px 4px 0 #cccccc">按钮2</div>
    </div>

    <bwu-fieldset :title='"Websocket连接"'>
        <div class="row">
            <bwu-input :title="'部门'" class="col-3_1"></bwu-input>
            <bwu-input :title="'存放地址'" class="col-3_2"></bwu-input>
        </div>
        <div class="row">
            <bwu-input :title="'型号'" class="col-3_1"></bwu-input>
            <bwu-input :title="'计量单位'" class="col-3_1"></bwu-input>
            <bwu-input :title="'设备类别'" class="col-3_1"></bwu-input>
        </div>
        
        <div class="row">
            <bwu-input :title="'设备类别'" class="col-1_1" :type='"textarea"'></bwu-input>
        </div>

    </bwu-fieldset>
    
    
    <bwu-fieldset :title='"Websocket连接"'>
        <div class="row">
            <bwu-input :title="'部门'" class="col-3_1"></bwu-input>
            <bwu-input :title="'存放地址'" class="col-3_2"></bwu-input>
        </div>
        <div class="row">
            <bwu-input :title="'型号'" class="col-3_1"></bwu-input>
            <bwu-input :title="'计量单位'" class="col-3_1"></bwu-input>
            <bwu-input :title="'设备类别'" class="col-3_1"></bwu-input>
        </div>
        
        <div class="row">
            <bwu-radio :title="'设备类别'" class="col-1_1" :array="['splatoon','splashoot','splatest','splatrun']" :val.sync = 'radio_value'></bwu-radio>
        </div>
        
        <div class="row">
            <bwu-checkbox :title="'设备类别'" class="col-1_1" :array="['splatoon','splashoot','splatest','splatrun']" :vals.sync = 'checkbox_value'></bwu-checkbox>
        </div>

    </bwu-fieldset>



</div>



</template>

<script>
export default {
    data(){return {
        radio_value:'splatrun',
        checkbox_value:['splatrun']
    }}
}
</script>

<style scoped>

</style>

