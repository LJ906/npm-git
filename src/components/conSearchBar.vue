<template>
    <div class="con-search-bar">
        <Form 
            inline 
            ref="searchBarForm" 
            :model="value"  
            :label-width="labelWidth">
            <Row>
                <i-col 
                    :span="condition.span ? condition.span : 4" 
                    v-for="condition in conditions" 
                    :hidden="condition.hidden"
                    :key="condition.prop">
                    <template v-if="!condition.hidden">
                        <FormItem :label="condition.label" :prop="condition.prop" class="search-bar-item" :labelWidth="condition.labelWidth">
                            <Select 
                                v-if="condition.type==='select'"
                                v-model="value[condition.prop]" 
                                :placeholder="condition.placeholder? condition.placeholder : '请选择'" 
                                @on-change="hanldeSelectChange(condition, value)"
                                clearable>
                                <Option 
                                    v-for="(v, k) in condition.options" 
                                    :key="k + v" 
                                    :label="v" 
                                    :value="k"></Option>
                            </Select>

                            <DatePicker
                                v-else-if="condition.type == 'date' || condition.type == 'datetime'"
                                :type="condition.type"
                                v-model="value[condition.prop]"
                                placeholder="选择日期"
                                :value-format="condition.type == 'date'?'yyyy-MM-dd':'yyyy-MM-dd HH:mm:ss'"
                            ></DatePicker>

                            <i-input
                                v-else 
                                clearable
                                :type="condition.type"
                                v-model.trim="value[condition.prop]"
                                autocomplete="off"
                                @on-change="handleInpChange(condition, value)"
                                :placeholder="condition.placeholder? condition.placeholder : '请输入'"
                            ></i-input>
                        </FormItem>
                    </template>
                </i-col>

                <!-- 操作项 -->
                <i-col :span="operationsBtnSpan" v-if="operationsBtn && operationsBtn.length" align="right">
                    <Button 
                        class="operationsBtn"
                        v-for="(operation, i) in operationsBtn" 
                        :key="i" 
                        :type="operation.type"
                        :icon="operation.icon"
                        @click="operationsBtnClick(operation, value)"
                    >{{operation.label}}</Button>
                </i-col>
            </Row>
        </Form>

        
    </div>
</template>

<script>
/**
 * 参数： 
 * value: v-model 绑定的对象 ,
 * conditions : 查询项组成的数组， 如: 
    * [ { 
    *    prop: 'name',  // form绑定的prop字段
    *    label: '姓名',  
    *    type: 'text', // 常用的： select, date, datetime， 不写默认是text
    *    placeholder:  '', // 默认 ’请输入‘, 
    *    span: 4 // 每项站的份数， 默认4
    *    options: {id: '张三'} // type是select时的 选项，Object格式， 值绑定的key, 显示的 value
    *    event: 'eventName' // 下拉框， 或输入框 on-change时出发的事件名称， 记得在父组件中监听， 参数为v-model的对象，也就是value
    *     hidden: true, // boolean true 隐藏
    *  },
    * ]
 *  operationsBtn: [ // 操作项， 如
 *      {
 *          type: 
 *      }
 * ]
 */

export default {
    props: {
        value: Object,
        conditions: Array, // 查询项组成的数组
        labelWidth: {
            type: Number, 
            default: 100
        },
        conditionSpan: { // 查询项span占的分数默认4
            type: Number, 
            default: 4
        },
        operationsBtn: Array,
        operationsBtnSpan: {
            type: Number, 
            default: 4
        }

    }, 
    methods: {
        /**
         * 下拉框change事件
         * @param {Object} condition: 当前项的信息，
         * @param {Object} queryForm : 包含所有筛选项的值的对象 value
         * 如果当前项有event则触发自己的事件, 并将所有参数值传递出去
         */
        hanldeSelectChange (condition, queryForm) {
            if (condition.event) {
                this.$emit(condition.event, queryForm)
            }
        }, 

        // 输入框输入事件
        handleInpChange (condition, queryForm) {
            if (condition.event) {
                this.$emit(condition.event, queryForm)
            }
        }, 
        // 操作项点击事件
        operationsBtnClick (operation) {
            this.$emit(operation.event, queryForm)
        }

    }
}
</script>

<style scoped>
    .con-search-bar {
        padding: 10px 10px 0;
        background:#fff;
        border-radius:5px;
    }
    .search-bar-item {
        width: 100%;
    }
    .con-search-bar >>> .ivu-form-item{
        margin-bottom: 10px; 
    }
    .operationsBtn {
        margin-left: 20px;
    }
</style>
